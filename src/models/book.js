const mongoose = require('mongoose');
const { Schema } = mongoose;

// Book 에서 사용할 서브다큐먼트의 스키마입니다.
const AuthorSchema = new Schema({
    name: String,
    email: String
});

const BookSchema = new Schema({
    title: String,
    authors: [AuthorSchema],
    publishedDate: Date,
    price: Number,
    tags: [String],
    createdAt: { // 기본값을 설정할땐 이렇게 객체로 설정해줍니다
        type: Date,
        default: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60000
          )
    }
});

// 스키마를 모델로 변환하여, 내보내기 합니다.
if(mongoose.models.book) {
   Book = mongoose.model('Book');
} else {
   Book = mongoose.model('Book', BookSchema);
}

module.exports = Book