class EmergencyContactsController < ApplicationController
    def index
        @contacts = EmergencyContact.all
        render json: contacts
    end

    def create
        @contact = EmergencyContact.create(emergency_contact_params)
        if contact.valid?
            render json: contact
        else
            render json: contact.errors, status: :unprocessable_entity
        end
    end

    def update
        @contact = current_user.emergency_contacts.find(params[:id])
        @contact.update(emergency_contact_params)
        if contact.valid?
            render json: contact
        else
            render json: contact.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @contact = current_user.emergency_contacts.find(params[:id])
        if contact.destroy
            render json: contact
        else
            render json: contact.errors, status: :unprocessable_entity
        end
    end

    private
    def emergency_contact_params
        params.require(:emergency_contact).permit(:full_name, :relationship, :phone_number)
    end
end
