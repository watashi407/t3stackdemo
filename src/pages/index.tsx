import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Todos } from "../components/Todos";
import { CreateTodo } from "../components/CreateTodo";
import { CgToggleOn } from "react-icons/cg";



import { api } from "../utils/api";

function Home() {
  const { data: sessionData } = useSession();
  return (
    <>
      <Head>
        <title>Full stack todo app</title>
        <meta name="description" content="Full stack todo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0f1235] to-[#090920]">


          <div className="flex justify-end float-right absolute top-0 right-0 ">
            <div className="flex py-4">
              <span className="text-center text-l px-3 py-1 text-white">
                {sessionData && <span>🟢{sessionData.user?.email}</span>}
              </span>

              {/* sign button  button */}
             
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={sessionData ? () => void signOut() : () => void signIn("google")}
              >
                {sessionData ? <CgToggleOn/> : "Sign in"}
              </button>
            </div>
          </div>



        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 min-w-[100%]">
          {sessionData && (
            <div className="grid grid-cols-1 gap-4 md:gap-8">
              <div
                className="flex flex-col gap-4 rounded-xl bg-white/10 p-4 text-white"
              >
                <h3 className="text-xl font-bold">Todos</h3>
              
                <Todos/>
                <CreateTodo />
              </div>
            </div>
          )}

        </div>
      </main>
    </>
  );
}

export default Home;