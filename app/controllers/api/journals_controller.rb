require 'byebug'
class Api::JournalsController < ApplicationController
  before_action :require_logged_in

  def create #Check that its saving
    @journal = Journal.new(journal_params)
    @journal.user_id = current_user.id
    if @journal.save
      render :show
    else
      render json: @journal.errors.full_messages, status: 422
    end
  end

  def index
    # get all journals by current_user
    @journals = current_user.journals
  end

  def show
    @journal = Journal.find_by(id: params[:id])
  end

  def update
    @journal = current_user.journals.find(params[:id])
    if @journal.update_attributes(journal_params)
      render :show
    else
      render json: @journal.errors.full_messages, status: 422
    end
  end

  def destroy
    @journal = current_user.journals.find_by(id: params[:id])
    @journal.destroy

    render :show
  end

  private
  def journal_params
    params.require(:journal).permit(:title, :image_url)
  end
end
