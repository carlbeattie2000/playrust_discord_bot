import { Credentials } from '@eneris/push-receiver/dist/types'

export default interface AuthConfig {
    fcm_credientals: Credentials,
    expo_push_token: string,
    steam_token: string,
}
