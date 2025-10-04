import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function AppSignUp() {
  return (
    <div className="w-full max-w-md bg-gray-50 p-6 rounded-lg shadow-md">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend className="text-lg font-semibold ">SignUP</FieldLegend>
            <FieldGroup>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                    First Name
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-card-name-43j"
                    placeholder="Evil"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                    Last Name
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-card-name-43j"
                    placeholder="Rabbit"
                    required
                  />
                </Field>
              </div>
              <Field>
                <FieldLabel htmlFor="signin-mobile-number">
                  Mobile Number
                </FieldLabel>
                <Input
                  id="signin-mobile-number"
                  placeholder="+91 98765 43210"
                  required
                />
                <FieldLabel htmlFor="signin-email">Email Address</FieldLabel>
                <Input
                  id="signin-email"
                  placeholder="you@example.com"
                  required
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
          </Field>

          <FieldDescription className="p-1 space-x-2 text-center">
            Already Have an Account? <Button variant="outline">Sign In</Button>
          </FieldDescription>
        </FieldGroup>
      </form>
    </div>
  );
}
