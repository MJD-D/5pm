export default function formRow (fieldName, isRequired) {
    return (
        <div class="form-row w-full max-w-md mb-6">
            <div class="flex justify-between">
                <label for="Name" class="block text-sm font-medium leading-5 text-gray-700">
                    Name - required
                </label>
            <span class="text-sm leading-5 text-gray-500">Required</span>
        </div>
        <div class="mt-1 relative rounded-md shadow-sm">
            <input  class="block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm border-gray-300 rounded-md text-box single-line" id="Name" name="Name" type="text" value="Pete test" />
        </div>
    </div>
    )
}