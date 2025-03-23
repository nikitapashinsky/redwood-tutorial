import type { Prisma, Post } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: { data: { title: 'String8182624', body: 'String' } },
    two: { data: { title: 'String4499215', body: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
