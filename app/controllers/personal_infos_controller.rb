class PersonalInfosController < ApplicationController
    def index
        @infos = PersonalInfo.all
        render json: infos
    end

    def create
        @info = PersonalInfo.create(personal_info_params)
        if info.valid?
            render json: info
        else
            render json: info.errors, status: :unprocessable_entity
        end
    end

    def update
        @info = current_user.personal_infos.find(params[:id])
        @info.update(personal_info_params)
        if info.valid?
            render json: info
        else
            render json: info.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @info = current_user.personal_infos.find(params[:id])
        if info.destroy
            render json: info
        else
            render json: info.errors, status: :unprocessable_entity
        end
    end

    private
    def personal_info_params
        params.require(:personal_info).permit(:full_name, :gender, :phone_number, :allergy, :medical_history, :treatment_refusal, :pregnancy_status, :smoker, :alcohol, :recreational_drug, :menstruation, :code_status, :medical_condition, :diagnosis_date, :medication, :dosage)
    end
end
