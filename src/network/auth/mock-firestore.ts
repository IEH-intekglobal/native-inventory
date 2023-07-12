import type { User, UserInfo, IdTokenResult } from "firebase/auth"

function getDisplayName(email: string) {
    const [name] = email.split('@');
    return name;
}

interface WithToken {
    stsTokenManager: {
        accessToken: string
    }
}

function createFakeUser(email: string, password: string): User & WithToken {
    return {
        //UserInfo
        displayName: getDisplayName(email),
        email,
        phoneNumber: null,
        photoURL: null,
        providerId: "INTEKGLOBAL_PROVIDER",
        uid: "001",

        //withToken
        stsTokenManager: {
            accessToken: "token123"
        },

        //User props
        emailVerified: true,
        isAnonymous: false,
        metadata: {},
        providerData: [] as UserInfo[],
        refreshToken: "refresh",
        tenantId: "TENANT_PROJECT_ID",
        async delete() { },
        async getIdToken(forceRefresh?: boolean) {
            return "ID_TOKEN"
        },
        async getIdTokenResult(forceRefresh?: boolean) {
            const tokenResult: IdTokenResult = {
                authTime: "",
                expirationTime: "",
                issuedAtTime: "",
                signInProvider: null,
                signInSecondFactor: null,
                token: "",
                claims: {},
            }
            return tokenResult;
        },
        async reload() { },
        toJSON() { return {} }
    }
}

const fakeUsers = [{
    user: createFakeUser('admin@intekglobal.com', 'admin'),
    password: 'admin'
}];


export async function registerUser(email: string, password: string) {

    const user = createFakeUser(email, password);
    fakeUsers.push({ user, password });
    return user;
}

export async function logIn(email: string, password: string) {
    console.log('login', email, password);
    const user = fakeUsers.find((c => c.user.email === email && c.password === password))?.user;
    console.log(user, fakeUsers[0].user);
    return user;
}

export async function logOut() { 

}

