class Api::EntriesController < ApplicationController

  before_action :require_logged_in

  def create
    @entry = Entry.new(entry_params)


    unless @entry.save
      render json: @entry.errors.full_messages, status: 422
    end

    @entry
  end

  def index
    @entries = current_user.journal_entries
  end

  def update
    @entry = current_user.entries.find_by(id: params[:id])
    unless @entry.update_attributes(entry_params)
      render json: @entry.errors.full_messages, status: 422
    end

    render :index
  end

  def destroy
    @entry = current_user.entries.find_by(id: params[:id])
    @entry.destroy

    render :index
  end


  private

  def entry_params
    params.require(:entry).permit(:body, :title, :date, :id, :journal_id)
  end
end
