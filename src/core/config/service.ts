import { api } from "./api"
import { AxiosPromise } from "axios"

interface IRepoHttpRepository {
  get: (user: string) => Promise<AxiosPromise>
}

const RepoHttpService: IRepoHttpRepository = {
  get: (user: string) => api.get(`/${user}/repos`),
}

export default RepoHttpService
