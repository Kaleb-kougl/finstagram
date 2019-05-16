import * as dynamoDbLib from "../../libs/dynamodb-lib";
import { success, failure } from "../../libs/response-lib";

export async function main(event, context) {
    const data = JSON.parse(event.body);
    const params = {
        TableName: "photo_comments",
        Key: {
            photoId: event.pathParameters.id_photo,
            commentId: data.id_comment,
        },
        UpdateExpression: "SET commentText = :commentText",
        ExpressionAttributeValues: {
            ":commentText": data.commentText || null
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
