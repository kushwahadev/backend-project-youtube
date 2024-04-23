// below code by using promises
const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// below code by using try catch

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);

//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: true,
//             message: error.message
//         })

//     }
// };
