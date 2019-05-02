import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
    const data = JSON.parse(event.body);
    const params = {
        TableName: "photos",
        Key: {
            userId: event.requestContext.identity.cognitoIdentityId,
            photoId: event.pathParameters.id
        },
        UpdateExpression: "SET description = :description, photo = :photo",
        ExpressionAttributeValues: {
            ":photo": data.photo || null,
            ":description": data.description || null
        },
        ReturnValues: "ALL_NEW"
    };

    try {
        const result = await dynamoDbLib.call("update", params);
        return success({ status: true });
    } catch (e) {
        console.log(e);
        return failure({ status: false });
    }
}
