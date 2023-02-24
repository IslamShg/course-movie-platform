export const API_URL = `${process.env.NEXT_PUBLIC_APP_URL}/api`

export const getAuthUrl = (url: string) => `/auth${url}`
export const getMoviesUrl = (url: string) => `/movies${url}`
export const getActorsUrl = (url: string) => `/actors${url}`
export const getUsersUrl = (url: string) => `/users${url}`
export const getGenresUrl = (url: string) => `/genres${url}`
export const getRatingsUrl = (url: string) => `/ratings${url}`
