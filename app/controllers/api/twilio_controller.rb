require 'byebug'
class Api::TwilioController < ApplicationController

  skip_before_action :verify_authenticity_token

  def sms

    user_response = params[:Body]
    from          = params[:From]

    user = User.find_by(phone_number: from)

# user c User.find_by(id: 12)

# debugger

    return nil if user.nil?
    journal = Journal.find_by(user_id: user.id)
    @entry = Entry.new(body: user_response, journal_id: journal.id, date: Date.today )


    unless @entry.save
      render json: @entry.errors.full_messages, status: 422
    end

    @entry
    nil
  end



end


# {
#   "ToCountry"=>"US", "ToState"=>"CA", "SmsMessageSid"=>"xxx",
#   "NumMedia"=>"0", "ToCity"=>"", "FromZip"=>"30097", "SmsSid"=>"xxx",
#   "FromState"=>"GA", "SmsStatus"=>"received", "FromCity"=>"DULUTH", "Body"=>"Hi2",
#   "FromCountry"=>"US", "To"=>"+14156350441", "ToZip"=>"", "NumSegments"=>"1",
#   "MessageSid"=>"xxx",
#   "AccountSid"=>"xxx",
#   "From"=>"+16785448781", "ApiVersion"=>"2010-04-01"
# }
