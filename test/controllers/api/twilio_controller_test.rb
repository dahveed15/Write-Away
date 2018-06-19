require 'test_helper'

class Api::TwilioControllerTest < ActionDispatch::IntegrationTest
  test "should get sms" do
    get api_twilio_sms_url
    assert_response :success
  end

end
