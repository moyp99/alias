import {CognitoUserPool} from 'amazon-cognito-identity-js'

const poolData = {
    UserPoolId: 'us-east-2_VYoQKVOjS',
    ClientId: "169skor92bbjjgaei6ouch51gn"
}

export default new CognitoUserPool(poolData) 