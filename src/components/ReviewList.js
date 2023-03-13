import Review from './Review';

function ReviewList({ reviews }) {
  return (
    <div>
      {reviews.map((review, index) => (
        <Review
          key={index} // Make sure to provide a unique key for each instance of the component
          avatar={review.avatar}
          userName={review.userName}
          starRating={review.starRating}
          reviewBody={review.reviewBody}
          date={review.date} // Assuming you have a date property in your review object
        />
      ))}
    </div>
  );
}

export default ReviewList;