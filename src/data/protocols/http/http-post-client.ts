import { HttpResponse } from '.'

export type HttpPostParams<T> = {
  url: string
  body?: T
}

// T -> Tipo
// R -> Response

export interface HttpPostClient<T, R> {
  post (params: HttpPostParams<T>): Promise<HttpResponse<R>>
}
