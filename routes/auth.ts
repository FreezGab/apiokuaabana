import express from 'express'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import prisma from '../prisma/client'
import jwt from 'jsonwebtoken'

export const authRouter = express.Router()

// Enregistrement
authRouter.post('/register', async (req: Request, res: Response) => {
  const { email, password, name } = req.body

  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) return res.status(400).json({ error: 'Email déjà utilisé' })

const hashed = await bcrypt.hash(password, 10)

const user = await prisma.user.create({
  data: { email, password: hashed, name },
})

  res.json(user)
})

// Connexion
authRouter.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body
  const user = await prisma.user.findUnique({
    where: { email },
    include: { 
      member: {
        include: {
          association: true, // Inclure les associations auxquels l'utilisateur appartient
        },
      },
    },
  })

  if (!user) return res.status(401).json({ error: 'Utilisateur non trouvé' })

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) return res.status(401).json({ error: 'Mot de passe incorrect' })

  const token = jwt.sign({ userId: user.id }, 'secret_key', { expiresIn: '7d' })

  res.json({
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      associationId: user.member?.associationId || null,
    },
})
})