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
        <div className="space-y-8">
          <div className="border-b border-gray-900/10 pb-12"></div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="teamName" className="block text-sm font-medium leading-6 text-gray-900">
                Team Name:
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="teamName"
                    name="teamName"
                    type="text"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    {...register('teamName')}
                  />
                  {errors.teamName && <span className="text-red-400 text-xs">{errors.teamName.message}</span>}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
              Description
            </label>
            <div className="mt-2">
              <textarea
                id="description"
                name="description"
                rows={2}
                className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                {...register('description')}
              />
              {errors.description && <span>{errors.description.message}</span>}
            </div>
          </div>

          <input
            type="submit"
            value="Create team"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          />
        </div>
    </form >
    </>
  )
}

export default CreateTeam;