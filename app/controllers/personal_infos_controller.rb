class PersonalInfosController < ApplicationController
    def index
        personal_infos = PersonalInfo.all
        render json: personal_infos
    end

    def create
        info = PersonalInfo.create(personal_info_params)
        if personal_info.valid?
            render json: personal_info
        else
            render json: personal_info.errors, status: :unprocessable_entity
        end
    end

    def update
        personal_info = current_user.personal_infos.find(params[:id])
        personal_info.update(personal_info_params)
        if personal_info.valid?
            render json: personal_info
        else
            render json: personal_info.errors, status: :unprocessable_entity
        end
    end

    def destroy
        personal_info = current_user.personal_infos.find(params[:id])
        if personal_info.destroy
            render json: personal_info
        else
            render json: personal_info.errors, status: :unprocessable_entity
        end
    end

    private
    def personal_info_params
        params.require(:personal_info).permit(:full_name, :gender, :phone_number, :allergy, :medical_history, :treatment_refusal, :pregnancy_status, :smoker, :alcohol, :recreational_drug, :menstruation, :code_status, :medical_condition, :diagnosis_date, :medication, :dosage)
    end
end
