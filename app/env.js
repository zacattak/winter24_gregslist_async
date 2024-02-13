export const dev = window.location.origin.includes('localhost')
// NOTE this exported variable will be used in your default axios instance
export const baseURL = dev ? 'https://sandbox.codeworksacademy.com' : ''
export const domain = ''
export const audience = ''
export const clientId = ''
