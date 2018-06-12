require 'test_helper'

class Api::JournalsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_journals_create_url
    assert_response :success
  end

  test "should get index" do
    get api_journals_index_url
    assert_response :success
  end

  test "should get update" do
    get api_journals_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_journals_destroy_url
    assert_response :success
  end

  test "should get show" do
    get api_journals_show_url
    assert_response :success
  end

end
