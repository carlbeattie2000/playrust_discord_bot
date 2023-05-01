import AuthConfig from "../interfaces/authConfig";
import rust_plus_auth from "./rust_plus_auth";
import { PushReceiver } from '@eneris/push-receiver'

async function fcmListen() {
    const authConfigFile: AuthConfig | undefined = rust_plus_auth.getAuthConfig();

    if (authConfigFile === undefined) {
        console.log('Please use /rust_auth to pair rust+ with the bot.')

        return;
    }

    const fcmClient = new PushReceiver({
        credentials: authConfigFile.fcm_credientals,
        senderId: '976529667804',
        persistentIds: [],
    })

    const listen = fcmClient.onNotification(({ message }) => {
        console.log('New rust notifcation', message);
    })

    console.log('Rust+ connected!')
}

export default fcmListen
