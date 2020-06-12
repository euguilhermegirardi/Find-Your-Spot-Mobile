# Find-Your-Spot-Mobile

This is the mobile part of the **Find-Your-Spot** project.
This is a project where I could use many professional techniques that is used in "the real world".

## About the project

- The **Find-Your-Spot** is an application where a company can share a spot inside of your building to people use it daily.
- The **_company_** access the website to register a spot saying the company's name, which technology they use and the price.
- The **_user_** access the app to search for a spot. He/She enter with an email and which technologies they work with and then they are send to another page where they can find some spots and request a date.
- The **_company_** receives this request in real-time and can accept or decline it sending the answer also in real-time to the **_user_**.

## The mobile

The mobile was developed with [**_React Native_**](https://reactnative.dev/) using [**_Expo_**](https://expo.io/) and **Xcode** as a simulator.
[**_React Navigation_**](https://reactnavigation.org/) was used to handle the routes in this application and [**_socket.io_**](https://socket.io/) to connect the requests from the mobile to the web in real-time.

## Getting started

1.  Prerequisites

- npm

      npm install npm@latest -g

2. Installation

- Clone the repo

      git clone https://github.com/euguilhermegirardi/Find-Your-Spot-Mobile.git

3. Install NPM packages

       npm install

4. Run the application

       npm run start
    
5. **Note**: You have to run the [**_backend_**](https://github.com/euguilhermegirardi/Find-Your-Spot-Backend) to run this application.

6. In localhost you can open-up the project by clickin on 'Run on...' iOS, Android or in the browser.

Obs. Attention on this part. You may have to change the 'baseURL' in the file 'src/services/api.js' if the app doesn't run at first.
Check the CONNECTION in the localhost in 'exp://...' on the left.

## Contributing

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a pull request

## License

![MIT](https://img.shields.io/badge/License-MIT-blue.svg)
