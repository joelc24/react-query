import axios from 'axios'

export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
})