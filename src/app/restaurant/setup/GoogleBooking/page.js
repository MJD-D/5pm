'use client'

import Image from 'next/image'
import {useState} from 'react';

export default function GoogleBooking() {
  //TODO add sidebar and topnav

  const [checked,setChecked] = useState();


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
            <div class="bg-white rounded shadow overflow-hidden">
              <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Enable or Disable Google Maps Booking
                </h3>
              </div>
              <div class="form-container p-4 sm:px-6 py-4">
                <div class="block">
                  <p class="mb-4">
                    <input type='radio' name='rbGoogle' id='rbGoogleEnabled' class="form-radio h-5 w-5 text-green-600" value="true" onChange={(e)=> {setChecked(true)}}/>
                    <label for="rbGoogleEnabled" >&nbsp;Enable</label>
                    &nbsp;&nbsp;&nbsp;
                    <input type='radio' name='rbGoogle' id='rbGoogleDisabled' class="form-radio h-5 w-5 text-red-600" value="false" onChange={(e) => {setChecked(false)}} defaultChecked/>
                    <label for="rbGoogleDisabled" >&nbsp;Disable</label>
                    <br/>
                  </p>
                  { checked &&
                  <div id="fieldSection">
                    <div class="form-row w-full max-w-md mb-6">
                      <div class="flex justify-between">
                          <label for="Name" class="block text-sm font-medium leading-5 text-gray-700">
                              Name - required
                          </label>
                      <span class="text-sm leading-5 text-gray-500">Required</span>
                      </div>
                      <div class="mt-1 relative rounded-md shadow-sm">
                          <input  class="block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm border-gray-300 rounded-md text-box single-line" id="Name" name="Name" type="text" />
                      </div>
                    </div>
                    
                    <div class="form-row w-full max-w-md mb-6">
                      <div class="flex justify-between">
                          <label for="Name" class="block text-sm font-medium leading-5 text-gray-700">
                            Public URL
                          </label>
                      <span class="text-sm leading-5 text-gray-500">Required</span>
                      </div>
                      <div class="mt-1 relative rounded-md shadow-sm">
                          <input  class="block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm border-gray-300 rounded-md text-box single-line" id="PublicURL" name="Public Url" type="text" />
                      </div>
                    </div>

                    <div class="form-row w-full max-w-md mb-6">
                      <div class="flex justify-between">
                          <label for="Name" class="block text-sm font-medium leading-5 text-gray-700">
                              Phone
                          </label>
                      <span class="text-sm leading-5 text-gray-500">Required</span>
                      </div>
                      <div class="mt-1 relative rounded-md shadow-sm">
                          <input  class="block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm border-gray-300 rounded-md text-box single-line" id="Phone" name="Phone" type="text"  />
                      </div>
                    </div>

                    <div class="form-row w-full max-w-md mb-6">
                      <div class="flex justify-between">
                          <label for="Name" class="block text-sm font-medium leading-5 text-gray-700">
                              Address
                          </label>
                      <span class="text-sm leading-5 text-gray-500">Required</span>
                      </div>
                      <div class="mt-1 relative rounded-md shadow-sm">
                          <input  class="block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm border-gray-300 rounded-md text-box single-line" id="Address" name="Address" type="text"  />
                      </div>
                    </div>

                    <div class="form-row w-full max-w-md mb-6">
                      <div class="flex justify-between">
                          <label for="Name" class="block text-sm font-medium leading-5 text-gray-700">
                              Postal Code
                          </label>
                      <span class="text-sm leading-5 text-gray-500">Required</span>
                      </div>
                      <div class="mt-1 relative rounded-md shadow-sm">
                          <input  class="block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm border-gray-300 rounded-md text-box single-line" id="PostCode" name="PostCode" type="text"  />
                      </div>
                    </div>

                    <div class="form-row w-full max-w-md mb-6">
                      <div class="flex justify-between">
                          <label for="Locality" class="block text-sm font-medium leading-5 text-gray-700">
                              Locality
                          </label>
                      <span class="text-sm leading-5 text-gray-500">Required</span>
                      </div>
                      <div class="mt-1 relative rounded-md shadow-sm">
                          <input  class="block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm border-gray-300 rounded-md text-box single-line" id="Locality" name="Locality" type="text"/>
                      </div>
                    </div>
                    

                    <div class="form-row w-full max-w-md mb-6">
                      <div class="flex justify-between">
                        <label for="RWGMessage" class="block text-sm font-medium leading-5 text-gray-700">
                        Google Booking message
                        </label>
                        <span class="text-sm leading-5 text-gray-500"></span>
                      </div>
                        <div class="mt-1 relative rounded-md shadow-sm">
                          
                        </div>
                    </div>
                  </div>
                  }

                    <div class="form-row">
                      <a class="submitbtn float-right inline-flex items-center px-4 py-2  border border-transparent bg-purple-600 shadow-sm text-base font-medium rounded-md   hover:bg-purple-700 active:bg-purple-600 active:text-white-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out text-white" href="#">Save Settings</a>
                    </div>
                </div>
              </div>
            </div>
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
