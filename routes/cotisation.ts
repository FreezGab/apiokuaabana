import express from 'express';
import { addCotisation, getCotisations } from '../controllers/cotisationController';
import PDFDocument from 'pdfkit'
import nodemailer from 'nodemailer'
import getStream from 'get-stream'
import prisma from '@prisma/client';

export const cotisationRouter = express.Router();

cotisationRouter.post('/', addCotisation);
cotisationRouter.get('/', getCotisations);

const member = await prisma.member.findUnique({
  where: { id: cotisation.memberId },
  include: { user: true, association: true },
})

if (member?.user?.email) {
  await sendCotisationReceipt(cotisation, member.user, member.association)
}


async function sendCotisationReceipt(cotisation: any, member: any, association: any) {
  const doc = new PDFDocument()
  doc.fontSize(16).text('Reçu de Cotisation', { align: 'center' })
  doc.moveDown()
  doc.fontSize(12)
  doc.text(`Membre : ${member.name}`)
  doc.text(`Montant : ${cotisation.amount} FCFA`)
  doc.text(`Date : ${new Date(cotisation.paidAt).toLocaleDateString()}`)
  doc.text(`Association : ${association.name}`)
  doc.text(`Numéro de reçu : ${cotisation.id}`)

  doc.end()

  const buffer = await getStream.buffer(doc)

  // transporter nodemailer
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: `"Gestion Cotisations" <${process.env.SMTP_USER}>`,
    to: member.email,
    subject: 'Votre reçu de cotisation',
    text: 'Merci pour votre contribution ! Voici votre reçu.',
    attachments: [
      {
        filename: `recu-${member.name}.pdf`,
        content: buffer,
      },
    ],
  })
}
