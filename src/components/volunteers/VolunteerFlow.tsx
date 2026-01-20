"use client";

import { useState } from "react";
import { VolunteerFormData } from "@/lib/mock-volunteers";
import StepInitial from "./StepInitial";
import StepExistingVolunteer from "./StepExistingVolunteer";
import StepForm from "./StepForm";
import StepAreas from "./StepAreas";
import StepSuccess from "./StepSuccess";

type FlowStep =
  | "initial"
  | "existing"
  | "form"
  | "areas"
  | "success"
  | "needHelp";

export default function VolunteerFlow() {
  const [currentStep, setCurrentStep] = useState<FlowStep>("initial");
  const [formData, setFormData] = useState<VolunteerFormData>({
    name: "",
    email: "",
    phone: "",
    birthDate: "",
    education: "medio",
  });
  const [needHelp, setNeedHelp] = useState(false);

  const handleSelectPath = (path: "existing" | "new") => {
    if (path === "existing") {
      setCurrentStep("existing");
    } else {
      setCurrentStep("form");
    }
  };

  const handleFormSubmit = (data: VolunteerFormData) => {
    setFormData(data);
    setCurrentStep("areas");
  };

  const handleAreasSubmit = (selectedAreas: string[]) => {
    setFormData((prev) => ({ ...prev, selectedAreas }));
    setNeedHelp(false);
    setCurrentStep("success");
  };

  const handleNeedHelp = () => {
    setNeedHelp(true);
    setCurrentStep("success");
  };

  const handleBackToInitial = () => {
    setCurrentStep("initial");
    setFormData({
      name: "",
      email: "",
      phone: "",
      birthDate: "",
      education: "medio",
    });
    setNeedHelp(false);
  };

  const handleBackToForm = () => {
    setCurrentStep("form");
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {currentStep === "initial" && (
        <StepInitial
          onSelectPath={handleSelectPath}
          onBack={handleBackToInitial}
        />
      )}

      {currentStep === "existing" && (
        <StepExistingVolunteer onBack={handleBackToInitial} />
      )}

      {currentStep === "form" && (
        <StepForm onSubmit={handleFormSubmit} onBack={handleBackToInitial} />
      )}

      {currentStep === "areas" && (
        <StepAreas
          formData={formData}
          onSubmit={handleAreasSubmit}
          onBack={handleBackToForm}
          onNeedHelp={handleNeedHelp}
        />
      )}

      {currentStep === "success" && (
        <StepSuccess
          formData={formData}
          needHelp={needHelp}
          onBack={handleBackToInitial}
        />
      )}
    </div>
  );
}
