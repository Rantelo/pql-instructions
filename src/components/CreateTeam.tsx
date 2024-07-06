import React from 'react';
import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'

type FormData = {
  teamName: string;
  description: string;
};

const CreateTeam = () => {

  const schema: ZodType<FormData> = z.object({
    teamName: z.string({
      required_error: 'Team name required'
    })
    .min(1),
    description: z.string().max(100)
  });

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const submitNewTeam = (data: FormData) => {
    console.log(data)
  }

  /**
   * TODO: Make teamname unique
   */
  return (
    <>
      <form onSubmit={handleSubmit(submitNewTeam)}>
        <label>Team Name: </label>
        <input type="text" { ...register('teamName') } />
        {errors.teamName && <span>{errors.teamName.message}</span>}
        <label>Description: </label>
        <input type="text" { ...register('description') } />
        {errors.description && <span>{errors.description.message}</span>}

        <input type="submit" />
      </form>
    </>
  )
}

export default CreateTeam;