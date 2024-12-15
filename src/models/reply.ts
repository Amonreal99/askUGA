import mongoose,{Schema, Document, Model} from 'mongoose';
import {ObjectId} from "mongodb";

export interface IReply extends Document{
   
  content: string;
  postId: string | ObjectId;
 
}

const replySchema = new Schema<IReply>({
  content : {type:String, required:true},
  postId: {type:Schema.Types.ObjectId, ref :"Posts", required:false},
},
{timestamps:true}
);

const Reply: Model<IReply> = mongoose.models.Reply || mongoose.model<IReply>("Reply", replySchema);

export default Reply;
