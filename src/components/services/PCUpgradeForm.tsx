import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const PCUpgradeForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const components = [
    "CPU", "GPU", "RAM", "Stockage", "Alimentation", "Boîtier", "Carte Mère", "Refroidissement CPU"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    
    // Préparer les données pour l'email
    const currentConfig = components
      .map(comp => `${comp}: ${data[comp.toLowerCase()]}`)
      .join('\n');
    
    const componentsToUpgrade = components
      .filter(comp => data[`upgrade-${comp}`] === 'on')
      .join(', ');

    const emailBody = `
      Nouvelle demande d'amélioration PC
      
      Email client: ${data.email}
      Budget: ${data.budget}€
      
      Configuration actuelle:
      ${currentConfig}
      
      Composants à améliorer:
      ${componentsToUpgrade}
      
      Détails supplémentaires:
      ${data.details}
    `;

    try {
      // Ouvrir le client email par défaut avec les informations pré-remplies
      const mailtoLink = `mailto:clementmontagepc@gmail.com?subject=Nouvelle demande d'amélioration PC&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      toast({
        title: "Demande d'amélioration préparée",
        description: "Votre client email va s'ouvrir avec les informations pré-remplies.",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la préparation de l'email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} className="space-y-4">
      <div className="space-y-2">
        <Label>Configuration actuelle</Label>
        {components.map((component) => (
          <Input
            key={component}
            name={component.toLowerCase()}
            placeholder={component}
            className="mb-2"
          />
        ))}
      </div>
      <div className="space-y-2">
        <Label>Budget total</Label>
        <Input
          type="number"
          name="budget"
          placeholder="Budget en €"
        />
      </div>
      <div className="space-y-2">
        <Label>Composants à améliorer</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {components.map((component) => (
            <div key={component} className="flex items-center space-x-2">
              <Checkbox id={`upgrade-${component}`} name={`upgrade-${component}`} />
              <Label htmlFor={`upgrade-${component}`}>{component}</Label>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="votre@email.com"
          required
        />
      </div>
      <div className="space-y-2">
        <Label>Détails supplémentaires</Label>
        <Textarea 
          name="details"
          placeholder="Ajoutez ici toute information complémentaire concernant votre projet..."
          className="min-h-[100px]"
        />
      </div>
      <Button 
        type="submit" 
        className="w-full bg-forge-orange hover:bg-forge-red"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Préparation..." : "Demander un devis"}
      </Button>
    </form>
  );
};

export default PCUpgradeForm;