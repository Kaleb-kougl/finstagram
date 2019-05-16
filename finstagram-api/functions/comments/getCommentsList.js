import * as dynamoDbLib from "../../libs/dynamodb-lib";
import { success, failure } from "../../libs/response-lib";

export async function main(event, context) {
    const params = {
        TableName: "photo_comments",
        KeyConditionExpression: "photoId = :photoId",
        ExpressionAttributeValues: {
            ":photoId": event.pathParameters.id_photo
        }
    };

    try {
        const result = await dynamoDbLib.call("query", params);
        console.log(result);
        return success(result.Items);
    } catch (e) {
        return failure({ status: false });
    }
}