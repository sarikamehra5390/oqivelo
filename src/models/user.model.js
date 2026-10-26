import mongoose, {Schema} from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


const userSchema = new SchemaType(
    {
      username : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true, // when we optimaically 
        // want to enable the searching field in any field
      },

       email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
      },

       fullName : {
        type: String,
        required: true,
        trim: true,
        index: true, // when we optimaically 
        // want to enable the searching field in any field
      },

      avatar: {
        type:String, // cloudinary url
        required: true,
      },

      coverImage: {
        type: String ,

      },

      watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video",
        }
      ],
      password: {
          type: String,
          required: [true, "Password is required"]
      },
      refreshToken: {
        tyope:String,
      },


    }, 
    {
        timestamps: true
    }
)

// in arrow function in javascript we do not have the understanding of the context, but here we have to know the context 

userSchema.pre("save", async function(next) {
  if(!this.isModified("password")) return next()
  this.password = bcrypt.hash(this.password, 10)
  next()
})

// custom methods that we can design

userSchema.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password, this.password)
}

// JWT is a bearer token --> it is like the key whosoever have this or bear this we can provide it the data

userSchema.methods.generateAccessToken = function(){
  return jwt.sign(
     {
       _id: this._id,
       email: this.email,
       username: this.username,
       fullName: this.fullName,
     },
     process.env.ACCESS_TOKEN_SECRET,
     {
       expiresIn: process.env.ACCESS_TOKEN_EXPIRY
     }

  )
}
userSchema.methods.generateRefreshToken = function(){
     return jwt.sign(
     {
       _id: this._id,

     },
     process.env.REFRESH_TOKEN_SECRET,
     {
       expiresIn: process.env.REFRESH_TOKEN_EXPIRY
     }

  )
}



export const User = mongoose.model("User",userSchema) 



