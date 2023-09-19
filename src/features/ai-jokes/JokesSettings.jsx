import { DeleteIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Badge,
  Button,
  Flex,
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ruleAdded, ruleRemoved } from "./aiJokesSlice";

function JokesSettings() {
  const [form, setForm] = useState({ name: "", description: "" });
  const rules = useSelector((state) => state.aiJokes.rules);

  const dispatch = useDispatch();

  const handleAddRule = (event) => {
    event.preventDefault();
    dispatch(ruleAdded(form));
  };

  const handleRuleRemove = (ruleName) => {
    dispatch(ruleRemoved(ruleName));
  };

  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <Button leftIcon={<SettingsIcon />} variant="solid">
          Settings
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>Joke Rules</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <Flex width="100%" direction="column">
              {rules.map((rule) => (
                <Flex
                  key={rule.name}
                  width="100%"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={1}
                >
                  <Text>
                    <Badge mr={2} colorScheme="purple">
                      {rule.name}
                    </Badge>
                    <small>{rule.description}</small>
                  </Text>
                  <IconButton
                    onClick={() => handleRuleRemove(rule.name)}
                    variant="outline"
                    icon={<DeleteIcon />}
                    size="sm"
                  />
                </Flex>
              ))}
            </Flex>
          </PopoverBody>
          <PopoverFooter>
            <form onSubmit={handleAddRule}>
              <FormControl>
                <InputGroup size="sm" mb={2}>
                  <InputLeftAddon>Name:</InputLeftAddon>
                  <Input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup size="sm" mb={2}>
                  <InputLeftAddon>Description:</InputLeftAddon>
                  <Input
                    type="text"
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                  />
                </InputGroup>
              </FormControl>
              <Button size="sm" type="submit" alignSelf="flex-end">
                Submit
              </Button>
            </form>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}

export default JokesSettings;
