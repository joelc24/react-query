import axios from 'axios'

export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
})