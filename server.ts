import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { associationRouter } from './routes/association'
import { memberRouter } from './routes/member'
import { cotisationRouter } from './routes/cotisation'
import { activityRouter } from './routes/activity'
import { authRouter } from './routes/auth'
import { invitationRouter } from './routes/invitation'
import { statisticsRouter } from './routes/statistics'
import { presenceRouter } from './routes/presence'


dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/associations', associationRouter)
app.use('/api/members', memberRouter)
app.use('/api/cotisations', cotisationRouter)
app.use('/api/activities', activityRouter)
app.use('/api/auth', authRouter)
app.use('/api/invitations', invitationRouter)
app.use('/api/statistics', statisticsRouter)
app.use('/api/presences', presenceRouter)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`)
})
