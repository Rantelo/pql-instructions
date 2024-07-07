import React, { useEffect } from 'react';
import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'

type Team = {
  name: string;
  slogan: string;
};

const CreateTeam = ({ availablePlayers, setUpdateCreateTeamView }) => {

 
  const schema: ZodType<Team> = z.object({
    name: z.string({
      required_error: 'Team name required'
    })
      .min(1),
    slogan: z.string().max(100)
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful},
    reset
  } = useForm<Team>({ resolver: zodResolver(schema), defaultValues: { name: "", slogan: "" }})

  // React.useEffect(() => {
  //   if (isSubmitSuccessful) {
  //     console.log('Here i am');
  //     reset()
  //   }
  // }, [reset])
  
  const submitNewTeam = (team: Team) => {
    fetch('http://localhost:3001/api/teams', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({players: availablePlayers, ...team})
    })
    setUpdateCreateTeamView(Math.random());
    reset();
  }


  let submit = availablePlayers
    ? <input
      type="submit"
      value="Create team"
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    />
    : <button
      disabled
      className="rounded-md px-3 py-2 text-sm font-semibold disabled:bg-slate-200 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none "
      style={{cursor: 'not-allowed'}}
    > Create team
    </button>
  /**
   * TODO: Make teamname unique
   */
  return (
    <>
      <form onSubmit={handleSubmit(submitNewTeam)}>
        <div className="space-y-8">

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="teamName" className="block text-sm font-medium leading-6 text-gray-900">
                Team Name:
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    {...register('name')}
                  />
                  {errors.name && <span className="text-red-400 text-xs">{errors.name.message}</span>}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="slogan" className="block text-sm font-medium leading-6 text-gray-900">
              Slogan
            </label>
            <div className="mt-2">
              <textarea
                id="slogan"
                name="slogan"
                rows={2}
                className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                {...register('slogan')}
              />
              {errors.slogan && <span>{errors.slogan.message}</span>}
            </div>
          </div>

          { submit }

          <div className='p-4'></div>
        </div>
    </form >
    </>
  )
}

export default CreateTeam;