require 'test_helper'

class SurveysControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get surveys_index_url
    assert_response :success
  end

  test "should get sms" do
    get surveys_sms_url
    assert_response :success
  end

end
