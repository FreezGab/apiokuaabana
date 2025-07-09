import express from 'express'
import prisma from '../prisma/client'

export const statisticsRouter = express.Router()

statisticsRouter.get('/:associationId', async (req, res) => {
  const { associationId } = req.params

  const membersCount = await prisma.member.count({ where: { associationId } })
  const activitiesCount = await prisma.activity.count({ where: { associationId } })

  const cotisations = await prisma.cotisation.findMany({
    where: { member: { associationId } },
    select: { amount: true, paidAt: true },
  })

  const totalAmount = cotisations.reduce((sum, c) => sum + c.amount, 0)

  // Cotisations en retard : simulate (ex: pas de cotisation ce mois)
  const now = new Date()
  const currentMonth = now.getMonth()
  const cotisationsThisMonth = cotisations.filter(c => new Date(c.paidAt).getMonth() === currentMonth)
  const late = cotisationsThisMonth.length < membersCount

  // Mensuelles (groupées par mois)
  const monthly = Array(12).fill(0)
  cotisations.forEach(c => {
    const month = new Date(c.paidAt).getMonth()
    monthly[month] += c.amount
  })

  res.json({
    membersCount,
    activitiesCount,
    totalAmount,
    late,
    monthly,
  })
})
