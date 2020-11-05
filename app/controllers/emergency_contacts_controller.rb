class EmergencyContactsController < ApplicationController
    def index
        emergency_contacts = EmergencyContact.all
        render json: emergency_contacts
    end

    def create
        emergency_contact = EmergencyContact.create(emergency_contact_params)
        if contact.valid?
            render json: emergency_contact
        else
            render json: emergency_contact.errors, status: :unprocessable_entity
        end
    end

    def update
        emergency_contact = current_user.emergency_contacts.find(params[:id])
        emergency_contact.update(emergency_contact_params)
        if emergency_contact.valid?
            render json: emergency_contact
        else
            render json: emergency_contact.errors, status: :unprocessable_entity
        end
    end

    def destroy
        emergency_contact = current_user.emergency_contacts.find(params[:id])
        if emergency_contact.destroy
            render json: emergency_contact
        else
            render json: emergency_contact.errors, status: :unprocessable_entity
        end
    end

    private
    def emergency_contact_params
        params.require(:emergency_contact).permit(:full_name, :relationship, :phone_number)
    end
end
