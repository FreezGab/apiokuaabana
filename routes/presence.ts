import express from 'express'
import prisma from '../prisma/client'

export const presenceRouter = express.Router()

// Ajouter ou mettre à jour une présence
presenceRouter.post('/', async (req, res) => {
  const { memberId, activityId, present } = req.body

  const presence = await prisma.presence.upsert({
    where: { activityId_memberId: { activityId, memberId } },
    update: { present },
    create: { activityId, memberId, present },
  })

  res.json(presence)
})

// Récupérer les présences d’une activité
presenceRouter.get('/activity/:activityId', async (req, res) => {
  const list = await prisma.presence.findMany({
    where: { activityId: req.params.activityId },
    include: { member: true },
  })
  res.json(list)
})
