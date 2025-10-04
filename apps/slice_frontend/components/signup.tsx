import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function AppSignUp() {
  return (
    <div className="w-full max-w-md bg-gray-50 p-6 rounded-lg border-amber-200 border shadow-md">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend className="text-lg font-semibold ">SignUP</FieldLegend>
            <FieldGroup>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="signup-first-name">
                    First Name
                  </FieldLabel>
                  <Input id="signup-first-name" placeholder="Evil" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="signup-last-name">Last Name</FieldLabel>
                  <Input id="signup-last-name" placeholder="Rabbit" required />
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
          <Field>
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
