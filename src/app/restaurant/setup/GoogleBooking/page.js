import Image from 'next/image'

export default function GoogleBooking() {
  //TODO add sidebar and topnav
    return (
    <main className="flex-1">

      <div class="mx-auto mas-w-7xl px-4 sm:px-6 lg:px-8 mt-10 mb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:text-3xl sm:leading-9 sm:truncate">Google Booking 
        <span>
        <a class="backbtn float-right inline-flex items-center px-4 py-2  border border-gray-300 shadow-sm text-base font-medium rounded-md   hover:bg-gray-50 active:bg-gray-50 active:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out text-black" href="#">Back</a>
        </span>
        </h2>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="sm:flex flex-row items-top">
          <div class="sm:w-1/2 mt-8 mb-4 max-w-7xl">

          </div>
          <div class="sm:w-1/2 sm:ml-8 mt-8">
          <div class="alert bg-white border-purple-500 border-t-4 rounded p-4 max-w-7xl mx-auto shadow sm:px-6 ">
            <h2 class="alert-heading text-lg leading-6 font-medium text-gray-900 pb-4">Google Booking</h2>
            <div class="alert-content">
              <p class="pb-4">
                simpleERB has partnered with "Reserve with Google" to optimize your online booking presence so that you have the maximum chance of getting a booking when people do Google searches
              </p>
              <p class="pb-4">
              Your booking diary will appear in your "Google My Business Panel" without the customer having to leave the Google search results page and the booking will ingrate into your diary.
              </p>
              <p class="pb-4">
              Please note the integration is not a live feed and any availability changes made in simpleERB are only passed to the Google integration for 31 days availability, once per day at 11:30pm GMT and is live on Google from 1:30am GMT.
              </p>
              <p class="pb-4">
              You can enable or disable this feature at any time. When you remove availability in the simpleERB widget settings, the availability will disappear from Google as well. <a target="_blank"  href="https://help.simpleerb.com/en/articles/3782550-how-can-i-generate-bookings-using-the-reserve-with-google-integration">See our FAQ’s article here for further information.</a>
              </p>
              <p class="pb-4">
              You can still generate simpleERB bookings from Google by adding your widget URL to your Google Business Knowledge panel. <a target="_blank" href="https://help.simpleerb.com/en/articles/4998350-how-can-i-generate-bookings-from-google">See our article here.</a>
              </p>
              <h2 class="alert-heading text-lg leading-6 font-medium text-gray-900 pb-4">Important information about card capture / payment rules on Google bookings.</h2>
              <p class="pb-4">
              Please note that if you have payment / credit card capture feature enabled for enforced rule requirements, the Reserve with Google feature does not enforce this for customers at the time of booking. The customer will receive an email with the link to securely supply requirements. If the requirement is not met by the specified due date outlined in the rule, this will be auto-cancelled in your diary. You can monitor the status of payment required bookings here.
              </p>
              </div>
              </div>
          </div>
        </div>
      </div>
      </div>  
    </main>
    )
  }
