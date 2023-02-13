import RepoHttpService from "../config/service"
import { useState } from "react"



export default function useGetUserRepositories() {
  const [reposLoading, setReposLoading] = useState(false)
  const [reposError, setReposError] = useState(false)

  const getUserRepositories = async (user: string) => {
    try {
      setReposError(false)
      setReposLoading(true)
      const { data } = await RepoHttpService.get(user)
      return data
    } catch (e) {
      setReposError(true)
    } finally {
      setReposLoading(false)
    }
  }

  return {
    getUserRepositories,
    reposLoading,
    reposError,
  }
}
