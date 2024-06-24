import { OpenAICleint, AzurekeyCredentials } from "@azure/openai";
import { NextResponse } from "next/server";

const endpoint = process.env.ENDPOINT;
const apiKey = process.env.OPENAI_API_KEY;
const model = process.env.OPENAI_MODEL;
