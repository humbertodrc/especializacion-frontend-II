import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from '../interface';

interface UserState {
  data: User | null;
  loading: "loading" |"success" |"error"
  error: string;
}

const initialState: UserState = {
  data: null,
  loading: "loading",
  error: "",
};

export const fetchUser = createAsyncThunk("fetchUser", async () => {
  const response = await axios.get<User>("https://randomuser.me/api/");
  console.log(response.data);
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = "loading";
      state.error = "";
    });
    builder.addCase(
      fetchUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.data = action.payload;
        state.loading = "success";
      }
    );
    builder.addCase(fetchUser.rejected, (state) => {
      state.loading = "error";
      state.error = "Error fetching user data";
    });
  },
});

export default userSlice.reducer;


