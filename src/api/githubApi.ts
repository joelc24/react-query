import axios from 'axios'

export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
})