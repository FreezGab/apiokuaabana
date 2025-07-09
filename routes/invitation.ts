import express from 'express'
import prisma from '../prisma/client'
import crypto from 'crypto'
import nodemailer from 'nodemailer'
import { transporter } from '../utils/mailer'


export const invitationRouter = express.Router()

invitationRouter.post('/', async (req, res) => {
  const { email, role, associationId } = req.body

  const token = crypto.randomBytes(32).toString('hex')
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24) // 24h

  try {
    await prisma.invitation.create({
      data: {
        email,
        role,
        token,
        expiresAt,
        associationId,
      },
    })

    // simulate email (à remplacer par un vrai transporteur)
    const invitationLink = `http://localhost:3000/register?token=${token}`

    await transporter.sendMail({
    from: `"Gestion Associations" <${process.env.SMTP_USER}>`,
    to: email,
    subject: 'Invitation à rejoindre une association',
    html: `
        <h3>Bonjour,</h3>
        <p>Vous avez été invité à rejoindre l'association.</p>
        <p>Cliquez ici pour créer votre compte : <a href="${invitationLink}">${invitationLink}</a></p>
        <p><strong>Lien valable 24h.</strong></p>
    `,
    })


    console.log(`✅ Invitation envoyée à ${email} → ${invitationLink}`)
    res.json({ message: 'Invitation envoyée' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Erreur lors de l'envoi de l'invitation" })
  }
})

invitationRouter.get('/verify', async (req, res) => {
  const { token } = req.query

  const invitation = await prisma.invitation.findUnique({ where: { token: token as string } })
  if (!invitation || invitation.used || invitation.expiresAt < new Date()) {
    return res.status(400).json({ error: 'Lien invalide ou expiré' })
  }

  res.json({ email: invitation.email, role: invitation.role })
})

