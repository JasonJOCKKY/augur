# Tigers Final Project Augur Improvements
### *John McGinness, Evan Gerstner, Jingson Tan, Xiao Zhang, Weiju Liu*

## Our Elements
- [Install Scripts](https://github.com/JasonJOCKKY/augur-Tiger/tree/master/scripts)
- [FrontEnd (Angular)](https://github.com/JasonJOCKKY/augur-Tiger/tree/master/frontend)
- [Android App](https://github.com/Ulincsys/Augur-View)

## How to build
- Please see the [Read Me](https://github.com/Ulincsys/Augur-View/blob/master/README.md) on the [Ulincsys Github](https://github.com/Ulincsys/Augur-View) for the build instrucions of the Android app.
- To preview the frontend
   1. Enter the folder `/frontend`.
   2. Make sure the latest NodeJS and npm are installed.
   3. Make sure that angular cli is installed.  Can be installed with `npm install -g @angular/cli`.
   4. Install node dependencies by running `npm install`.
   5. For **testing purposes**, the frontend can be served on `http://localhost:4800` by running `ng serve`.
   6. To **build** the frontend for deployment, run `ng build --prod`. The build files will be located under `/frontend/dist`.
- Running the install normally will allow you to see the improved and updated install scripts.

## Issues
1. Improving the logic/flow of install script
   * [Adding more verbosity to the install script](https://github.com/JasonJOCKKY/augur-Tiger/issues/4)
   * [Make the default selections Unix compliant](https://github.com/JasonJOCKKY/augur-Tiger/issues/5)
2. Redesigning the front end using angular
   * [Visualization Page](https://github.com/JasonJOCKKY/augur-Tiger/issues/3)
   * [Home Page/Show all Repo Groups](https://github.com/JasonJOCKKY/augur-Tiger/issues/9)
  
## Resources Used
- [NgFor (Angular)](https://angular.io/api/common/NgForOf)
- [Angular Tables](https://material.angular.io/components/table/overview)
 
  
