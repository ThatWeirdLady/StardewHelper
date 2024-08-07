module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/mocks/mock_images.js",
    "\\.(css|less)$": "<rootDir>/mocks/mock_images.js",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
